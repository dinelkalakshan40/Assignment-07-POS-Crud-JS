var customers = [];
var recordIndex;


$(document).ready(() => {
    if (localStorage.getItem('customers')) {
        customers = JSON.parse(localStorage.getItem('customers'));
        loadTable();
    }
});

function loadTable() {

    $("#customer-tbl-body").empty();

    customers.map((item, index) => {
        let record = `<tr>
                <td class="customer-id-value">${item.id}</td>
                <td class="customer-name-value">${item.name}</td>
                <td class="customer-Address-value">${item.address}</td>
                <td class="customer-salary-value">${item.salary}</td>
                
            </tr>`;
        $("#customer-tbl-body").append(record);
    });
}
$("#customer-add-btn").on('click', () => {

    //var customerId = $('#customer-id').val();
    var customerName = $('#customer-name').val();
    var customerAddress = $('#customer-address').val();
    var customerSalary = $('#customer-salary').val();



    let customer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary,
    }

    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
    loadTable();
    console.log(customers);

    $("#customer-clear-btn").click();
});



$("#customer-update-btn").on('click', () => {
    var customerId = $('#customer-id').val();
    var customerName = $('#customer-name').val();
    var customerAddress = $('#customer-address').val();
    var customerSalary = $('#customer-salary').val();


    let customerObj = customers[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    customerObj.id = customerId;
    customerObj.name = customerName;
    customerObj.address = customerAddress;
    customerObj.salary = customerSalary;


    // console.log("S1: ", studentObj);
    // console.log("S2: ", students[recordIndex]);

    loadTable();
    $("#customer-clear-btn").click();
});