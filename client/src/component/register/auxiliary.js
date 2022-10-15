export function validate (input) {
    let error = {}
    
    if (!input.namesupplier) {
        error.namesupplier = "Name is required";
    }
    else if (!/^[A-Za-z0-9\s]+$/g.test(input.namesupplier)) {
        error.namesupplier = "Name is invalid. They only allow letters and numbers"
    }

    if (!input.phone) {
        error.phone = 'Phone is required';
    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g.test(input.phone)) {
        error.phone = 'Enter a valid phone number'
    }

    if(input.category === '') {
        error.category = 'Category is required'
    }

    if (!input.adress) {
        error.adress = "Adress is required";
    }

    if (!input.cuit) {
        error.cuit = 'Cuit is required';
    } else if (!/\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g.test(input.cuit)) {
        error.cuit = 'Enter a valid cuit'
    }

    return error;
}