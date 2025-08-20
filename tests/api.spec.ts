import {test,expect} from '@playwright/test';
import { request } from 'http';

test("To test the API response for the given website",async({request})=>{

    const response = await request.get("https://fakerestapi.azurewebsites.net/api/v1/Activities");
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);
})

test.afterEach(async ({ page }) => {
    console.log('✅ Test finished');
});


test("To test the post request",async({request})=>{
    
    const response = await request.post("https://fakerestapi.azurewebsites.net/api/v1/Activities",
        {data:{
  "id": 0,
  "title": "string",
  "dueDate": "2025-08-20T04:15:37.384Z",
  "completed": true
    }
});
    expect(response.status()).toBe(200);
    console.log(await response.json());

});
    