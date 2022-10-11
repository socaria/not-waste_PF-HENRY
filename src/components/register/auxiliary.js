export function validate (input) {
    let error = {}
    if (!input.name) {
        error.name = "Name is required";
    }
    else if (!/^[A-Za-z0-9\s]+$/g.test(input.name)) {
        error.name = "Name is invalid. They only allow letters and numbers"
    }

    if (!input.proveedor && !input.lastName) {
        error.lastName = "Lastname is required";
    }
    else if (!input.proveedor && !/^[A-Za-z0-9\s]+$/g.test(input.lastName)) {
        error.lastName = "Lastname is invalid. They only allow letters and numbers"
    }

    if (!input.password) {
        error.password = "Password is required";
    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(input.password)) {
        error.password = "The password must have at least 8 and 16 characters, at least one digit, at least one lowercase and at least one uppercase.It can NOT have other symbols."
    }

    if (!input.phone) {
        error.phone = 'Phone is required';
    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g.test(input.phone)) {
        error.phone = 'Enter a valid phone number'
    }

    if(!input.email) {
        error.mail = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)) {
        error.email = "Enter a valid email"
    }

    if(input.state === '') {
        error.state = 'State is required'
    }

    return error;
}