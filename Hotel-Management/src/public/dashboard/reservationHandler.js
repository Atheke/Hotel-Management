export function renderReservation(reservation)
{
    axios.get('http://localhost:3000/reservation')
		.then(result => {
			reservation.innerHTML = '';
	let html = `
		<table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    <thead class="bg-gray-200 text-gray-700">
      <tr>
        <th class="py-2 px-4">Reservation ID</th>
        <th class="py-2 px-4">Guest ID</th>
        <th class="py-2 px-4">Checkin Date</th>
        <th class="py-2 px-4">Checkout Date</th>
        <th class="py-2 px-4">Reservation Status</th>
        
      </tr>
    </thead>
    <tbody>
	`;
	result.data.forEach(room => {
  html += `
    <tr class="border-t">
      <td class="py-2 px-4 text-center">${room.reservation_id}</td>
      <td class="py-2 px-4">${room.guest_id}</td>
      <td class="py-2 px-4">${room.check_in_date}</td>
      <td class="py-2 px-4">${room.check_out_date}</td>
      <td class="py-2 px-4">${room.reservation_status}</td>
    
    </tr>
  `;
	});

	html += `
		  </tbody>
		</table>
	`;

	reservation.innerHTML = html;
			
		})
		.catch(error => {
			console.log(error);
		})
}

