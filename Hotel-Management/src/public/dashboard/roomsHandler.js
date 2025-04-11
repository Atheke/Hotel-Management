export function renderRooms(room)
{
    axios.get('http://localhost:3000/room')
		.then(result => {
			room.innerHTML = '';
	let html = `
		<table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="py-2 px-4">Room ID</th>
        <th class="py-2 px-4">Hotel ID</th>
        <th class="py-2 px-4">Room Number</th>
        <th class="py-2 px-4">Room Type</th>
        <th class="py-2 px-4">Bed Count</th>
        <th class="py-2 px-4">Capacity</th>
        <th class="py-2 px-4">Status</th>
         <th class="py-2 px-4">Price/Night</th>
      </tr>
    </thead>
    <tbody>
	`;
	result.data.forEach(room => {
  html += `
    <tr class="border-t">
      <td class="py-2 px-4 text-center">${room.room_id}</td>
      <td class="py-2 px-4">${room.hotel_id}</td>
      <td class="py-2 px-4">${room.room_number}</td>
      <td class="py-2 px-4">${room.room_type}</td>
      <td class="py-2 px-4">${room.bed_count}</td>
      <td class="py-2 px-4">${room.capacity}</td>
      <td class="py-2 px-4">${room.status}</td>
      <td class="py-2 px-4 text-center">${staff.price_per_night}</td>
    </tr>
  `;
	});

	html += `
		  </tbody>
		</table>
	`;

	room.innerHTML = html;
			
		})
		.catch(error => {
			console.log(error);
		})
}

