
const credentials = {
	key : "staff info"
};


export function renderStaff(staff)
{
	axios.get('http://localhost:3000/dashboard/staff')
		.then(result => {
			staff.innerHTML = '';
	let html = `
		<table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="py-2 px-4">Staff ID</th>
        <th class="py-2 px-4">Full Name</th>
        <th class="py-2 px-4">Email</th>
        <th class="py-2 px-4">Phone</th>
        <th class="py-2 px-4">Position</th>
        <th class="py-2 px-4">Department</th>
        <th class="py-2 px-4">Hotel ID</th>
      </tr>
    </thead>
    <tbody>
	`;
	result.forEach(staff => {
  html += `
    <tr class="border-t">
      <td class="py-2 px-4 text-center">${staff.staff_id}</td>
      <td class="py-2 px-4">${staff.full_name}</td>
      <td class="py-2 px-4">${staff.email}</td>
      <td class="py-2 px-4">${staff.phone}</td>
      <td class="py-2 px-4">${staff.position}</td>
      <td class="py-2 px-4">${staff.department}</td>
      <td class="py-2 px-4 text-center">${staff.hotel_id}</td>
    </tr>
  `;
	});

	html += `
		  </tbody>
		</table>
	`;

	staff.innerHTML = html;
			
		})
		.catch(error => {
			console.log(error);
		})
	
}


