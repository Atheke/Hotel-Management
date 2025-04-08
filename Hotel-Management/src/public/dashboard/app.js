import {renderStaff} from './staffHandler.js';

const dashboard = document.getElementById('dashboard');
const staff = document.getElementById('staff');

const home = document.getElementById('dashboard_home');
const staff_details = document.getElementById('dashboard_staff'); 

staff_details.style.display = 'none';
dashboard.addEventListener('click' , () => 
{
	console.log("dashbord clicked");
	renderDashboard();
});

staff.addEventListener('click' , () => 
{
	console.log("staff clicked");
	renderStaff(home , staff_details);	
});


function renderDashboard()
{
	home.style.display = 'block';
	staff_details.style.display = 'none';
	console.log("dashboard home");	
}


