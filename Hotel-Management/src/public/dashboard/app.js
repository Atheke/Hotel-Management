import {renderStaff} from './staffHandler.js';
import {renderRooms} from './roomsHandler.js';
import {renderGuests} from './guestsHandler.js';
import {renderService} from './serviceHandler.js';
import {renderReservation} from './reservationHandler.js';

const dashboard = document.getElementById('dashboard');
const staff = document.getElementById('staff');
const rooms = document.getElementById('rooms');
const guests = document.getElementById('guests');
const service = document.getElementById('service');
const reservation = document.getElementById('reserv');
const signout = document.getElementById('sign_out');

const home = document.getElementById('dashboard_home');
const staff_details = document.getElementById('dashboard_staff'); 
const rooms_details = document.getElementById('dashboard_rooms');
const guest_details = document.getElementById('dashboard_guests');
const service_details = document.getElementById('dashboard_service');
const reservation_details = document.getElementById('dashboard_reservation');

// staff_details.style.display = 'none';
// rooms_details.style.display = 'none';
// guest_details.style.display = 'none';

dashboard.addEventListener('click' , () => 
{
	console.log("dashbord clicked");
	renderDashboard();
});
reservation.addEventListener('click' , ()=> 
	{
			staff_details.style.display = 'none';
			rooms_details.style.display = 'none';
			guest_details.style.display = 'none';
			dashboard_home.style.display = 'none';
			service_details.style.display = 'none';
			reservation_details.style.display = 'block';
			renderReservation(reservation_details);
	});

staff.addEventListener('click' , () => 
{
	staff_details.style.display = 'block';
	rooms_details.style.display = 'none';
	guest_details.style.display = 'none';
	dashboard_home.style.display = 'none';
	service_details.style.display = 'none';
	reservation_details.style.display = 'none';
	renderStaff(staff_details);	
});

rooms.addEventListener('click' , ()=> 
{
	staff_details.style.display = 'none';
	rooms_details.style.display = 'block';
	guest_details.style.display = 'none';
	dashboard_home.style.display = 'none';
	service_details.style.display = 'none';
	reservation_details.style.display = 'none';
		renderRooms(rooms_details);
});

guests.addEventListener('click' , ()=> 
{
	staff_details.style.display = 'none';
	rooms_details.style.display = 'none';
	guest_details.style.display = 'block';
	dashboard_home.style.display = 'none';
	service_details.style.display = 'none';
	reservation_details.style.display = 'none';
		renderGuests(guest_details);
});

service.addEventListener('click' , ()=> 
{
		staff_details.style.display = 'none';
		rooms_details.style.display = 'none';
		guest_details.style.display = 'none';
		dashboard_home.style.display = 'none';
		service_details.style.display = 'block';
		reservation_details.style.display = 'none';
		renderService(service_details);
});

signout.addEventListener('click' , () => {
	axios.get('http://localhost:3000/logout')
	.then(response => {
		window.location.href = '/';
	})
	.catch(error => {

	})
});

function renderDashboard()
{
	home.style.display = 'block';
	staff_details.style.display = 'none';
	rooms_details.style.display = 'none';
	guest_details.style.display = 'none';
	service_details.style.display = 'none';
	reservation_details.style.display = 'none';
	console.log("dashboard home");	

	axios.get('http://localhost:3000/hotel')
    .then(result => {
        home.innerHTML = '';
let html = `
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
<thead class="bg-gray-200 text-gray-700">
  <tr>
    <th class="py-2 px-4">Hotel ID</th>
    <th class="py-2 px-4">Name</th>
    <th class="py-2 px-4">Address</th>
    <th class="py-2 px-4">Contact Number</th>
    <th class="py-2 px-4">Rating</th>
    
  </tr>
</thead>
<tbody>
`;
result.data.forEach(guest => {
html += `
<tr class="border-t">
  <td class="py-2 px-4 text-center">${guest.hotel_id}</td>
  <td class="py-2 px-4">${guest.name}</td>
  <td class="py-2 px-4">${guest .address}</td>
  <td class="py-2 px-4">${guest.conatct_number}</td>
  <td class="py-2 px-4">${guest.rating}</td>
 
</tr>
`;
});

html += `
      </tbody>
    </table>
`;

home.innerHTML = html;
        
    })
    .catch(error => {
        console.log(error);
    })


}


