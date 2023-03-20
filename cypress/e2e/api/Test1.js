/// <reference types="Cypress" />
describe('My First Test Suite', function() {
    it('Get All Employees', function() {
        cy.request('https://dummy.restapiexample.com/api/v1/employees')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response).property('body').to.contain({
                    message: 'Successfully! All records has been fetched.',
                  })
        })
    })
    it('Get Employee ID', function() {
        cy.request('https://dummy.restapiexample.com/api/v1/employee/1')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response).property('body').to.contain({
                    message: 'Successfully! Record has been fetched.',
                })
        })
    })
    it('Create New Employee', function() {
        cy.request('POST', 'https://dummy.restapiexample.com/api/v1/create', {
            body: '{"name":"test20032023","salary":"123","age":"23"}',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response).property('body').to.contain({
                message: 'Successfully! Record has been added.',
            })
        })
    })
})