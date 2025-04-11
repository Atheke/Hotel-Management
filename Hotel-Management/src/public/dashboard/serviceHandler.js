


export function renderService(service)
{
	axios.get('http://localhost:3000/service')
		.then(result => {
      console.log(result);
			service.innerHTML = '';
	let html = `
		<table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="py-2 px-4">Service ID</th>
        <th class="py-2 px-4">Service Name</th>
        <th class="py-2 px-4">Price</th>
        <th class="py-2 px-4">Description</th>
        
        
      </tr>
    </thead>
    <tbody>
	`;
	result.data.forEach(staff => {
  html += `
    <tr class="border-t">
      <td class="py-2 px-4 text-center">${staff.service_id}</td>
      <td class="py-2 px-4">${staff.service_name}</td>
      <td class="py-2 px-4">${staff.price}</td>
      <td class="py-2 px-4">${staff.description}</td>
    </tr>
  `;
	});

	html += `
		  </tbody>
		</table>
	`;

	service.innerHTML = html;
			
		})
		.catch(error => {
			console.log(error);
		})
	
}


