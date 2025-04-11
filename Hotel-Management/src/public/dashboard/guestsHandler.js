
export function renderGuests(guest)
{axios.get('http://localhost:3000/guest')
    .then(result => {
        guest.innerHTML = '';
let html = `
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
<thead class="bg-gray-200 text-gray-700">
  <tr>
    <th class="py-2 px-4">Guest ID</th>
    <th class="py-2 px-4">Full Name</th>
    <th class="py-2 px-4">Email</th>
    <th class="py-2 px-4">Phone</th>
    <th class="py-2 px-4">Password</th>
    <th class="py-2 px-4">User Role</th>
  </tr>
</thead>
<tbody>
`;
result.data.forEach(guest => {
html += `
<tr class="border-t">
  <td class="py-2 px-4 text-center">${guest.guest_id}</td>
  <td class="py-2 px-4">${guest.full_name}</td>
  <td class="py-2 px-4">${guest .email}</td>
  <td class="py-2 px-4">${guest.phone}</td>
  <td class="py-2 px-4">${guest.password}</td>
  <td class="py-2 px-4 text-center">${guest.user_role}</td>
</tr>
`;
});

html += `
      </tbody>
    </table>
`;

guest.innerHTML = html;

        
    })
    .catch(error => {
        console.log(error);
    })

}
