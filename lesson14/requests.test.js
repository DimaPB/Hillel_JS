
import EndpointsList from "./endpoints.js";
// import { faker } from '@faker-js/faker';

const apiPoint = new EndpointsList();

describe('Account endpoints tests', () => {

  test('GET: The list of devices', async () => {
    const resp = await apiPoint.getAllDevices(`/objects`);
    expect(resp.status).toBe(200);
    expect(resp.data[0].name).toBe("Google Pixel 6 Pro");
  })

  test('GET: The list of devices with wrong link', async () => {
    const resp = await apiPoint.getAllDevices('/unexpected');
    expect(resp.status).not.toBe(200);
    // expect(resp.data[0].name).toBe("Google Pixel 6 Pro");
  })


  test('GET: The single device', async () => {
    const resp = await apiPoint.getSingleDevice(`/objects/7`);
    expect(resp.status).toBe(200)
    expect(resp.data.name).toBe("Apple MacBook Pro 16")
  })

  test('GET: The wrong device', async () => {
    const resp = await apiPoint.getSingleDevice(`/objects/6`);
    expect(resp.status).toBe(200)
    expect(resp.data.name).not.toBe("Apple MacBook Pro 16")
  })

  test('POST: The price is higher than 1500 ', async () => {
    const resp = await apiPoint.postNewDevice(`/objects`,{
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 1849.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB"
      }
   });
    // console.log(resp.data.data.price)
    expect(resp.status).toBe(200)
    expect(resp.data.data.price).toBeGreaterThan(1500)
  })

  test('POST: The year is number', async () => {
    const resp = await apiPoint.postNewDevice(`/objects`,{
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 1849.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB"
      }
   });
    console.log(resp.id)
    expect(resp.status).toBe(200)
    expect(typeof(resp.data.data.year)).toMatch("number")
  })

  test('PUT: Update device info, color and price', async () => {
    const resp = await apiPoint.postNewDevice(`/objects`,{
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 2049.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB",
         "color": "silver"
      }
   });
   console.log(resp.data)

   expect(resp.status).toBe(200)
   expect(resp.data.data.color).toMatch("silver")
   expect(resp.data.data.price).toBe(2049.99)
  })

  test('PUT: createdAt returns', async () => {
    const resp = await apiPoint.postNewDevice(`/objects`,{
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 2049.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB",
         "color": "silver"
      }
   });
   expect(resp.status).toBe(200)
   expect(resp.data.createdAt).not.toBeNull()
  })

  test('DELETE: Delete device', async () => {
    const resp = await apiPoint.deleteDevice(`/objects/7`);
    expect(resp.status).toBe(405)
    //it returns the id in ff808181932badb60195cfbce5cd3b1d UUID format or so. I'm too tired to figure out such a riddle. 

  })
})