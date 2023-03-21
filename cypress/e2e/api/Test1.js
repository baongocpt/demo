/// <reference types="Cypress" />
describe('Verify API', function() {
    // it('to get all employees', function() {
    //     cy.request('https://dummy.restapiexample.com/api/v1/employees')
    //         .should((response) => {
    //             expect(response.status).to.eq(200)
    //             expect(response).property('body').to.contain({
    //                 message: 'Successfully! All records has been fetched.',
    //               })
    //     })
    //     cy.wait(3000)
    // })
    // it('to get an employee ID', function() {
    //     cy.request('https://dummy.restapiexample.com/api/v1/employee/9959')
    //         .should((response) => {
    //             expect(response.status).to.eq(200)
    //             expect(response).property('body').to.contain({
    //                 message: 'Successfully! Record has been fetched.',
    //             })
    //     })
    //     cy.wait(3000)
    // })
    // it('to create new employee', function() {
    //     cy.request('POST', 'https://dummy.restapiexample.com/api/v1/create', {
    //         body: '{"name":"test20230321_1","salary":"123","age":"23"}',
    //     }).then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response).property('body').to.contain({
    //             message: 'Successfully! Record has been added.',
    //         })
    //     })
    //     cy.wait(3000)
    // })
    it('to get all employees', function() {
        cy.request('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    })
    it('to get an employee ID', function() {
        cy.request('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    })
    it('to create new employee', function() {
        cy.request('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty')
            .should((response) => {
                expect(response.status).to.eq(200)
            })
    })
})