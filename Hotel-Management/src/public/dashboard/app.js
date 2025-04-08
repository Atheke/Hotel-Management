import {renderStaff} from './staffHandler.js';
import {renderRooms} from './roomsHandler.js';
import {renderGuests} from './guestsHandler.js';

const dashboard = document.getElementById('dashboard');
const staff = document.getElementById('staff');
const rooms = document.getElementById('rooms');
const guests = document.getElementById('guests');

const home = document.getElementById('dashboard_home');
const staff_details = document.getElementById('dashboard_staff'); 
const rooms_details = document.getElementById('dashboard_rooms');
const guest_details = document.getElementById('dashboard_guests');

staff_details.style.display = 'none';
rooms_details.style.display = 'none';
guest_details.style.display = 'none';

dashboard.addEventListener('click' , () => 
{
	console.log("dashbord clicked");
	renderDashboard();
});

staff.addEventListener('click' , () => 
{
	staff_details.style.display = 'block';
	rooms_details.style.display = 'none';
	guest_details.style.display = 'none';
	dashboard_home.style.display = 'none';
	renderStaff(staff_details);	
});

rooms.addEventListener('click' , ()=> 
{
	staff_details.style.display = 'none';
	rooms_details.style.display = 'block';
	guest_details.style.display = 'none';
	dashboard_home.style.display = 'none';
		renderRooms(rooms_details);
});

guests.addEventListener('click' , ()=> 
{
	staff_details.style.display = 'none';
	rooms_details.style.display = 'none';
	guest_details.style.display = 'block';
	dashboard_home.style.display = 'none';
		renderGuests(guest_details);
});

function renderDashboard()
{
	home.style.display = 'block';
	staff_details.style.display = 'none';
	console.log("dashboard home");	
}


