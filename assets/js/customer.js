var customers = [];
var recordIndex;



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

    var customerId = $('#customer-id').val();
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
    loadTable();
    console.log(customers);

    loadTable();
    $("#student-reset").click();
});