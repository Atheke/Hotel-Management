const test_object = [
  {
    "staff_id": 1,
    "full_name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "position": "Manager",
    "department": "Front Office",
    "hotel_id": 101
  },
  {
    "staff_id": 2,
    "full_name": "Jane Smith",
    "email": "jane.smith@example.com",
    "phone": "987-654-3210",
    "position": "Housekeeper",
    "department": "Housekeeping",
    "hotel_id": 101
  },
  {
    "staff_id": 3,
    "full_name": "Carlos Rodriguez",
    "email": "carlos.r@example.com",
    "phone": "555-123-4567",
    "position": "Chef",
    "department": "Kitchen",
    "hotel_id": 102
  },
  {
    "staff_id": 4,
    "full_name": "Amina Patel",
    "email": "amina.patel@example.com",
    "phone": "444-789-1234",
    "position": "Receptionist",
    "department": "Front Office",
    "hotel_id": 101
  },
  {
    "staff_id": 5,
    "full_name": "Liam Nguyen",
    "email": "liam.nguyen@example.com",
    "phone": "333-222-1111",
    "position": "Security",
    "department": "Security",
    "hotel_id": 103
  }
];

const credentials = {
	key : "staff info"
};


export function renderStaff(dashboard , staff)
{
	axios.post('http://localhost:3000/dashboard/rooms' , credentials)
		.then(result => {
				
		})
		.catch(error => {
			console.log(error);
		})
	dashboard.style.display = "none";
	staff.style.display = "block";
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
	test_object.forEach(staff => {
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

}


