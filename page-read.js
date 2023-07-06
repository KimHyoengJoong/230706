function getPageno() {
    const param = new URLSearchParams(location.search);
    const no = parseInt(param.get('no'));

    if (isNaN(no))
        return null;
    else if (no < 1)
        return null;
    return no;
}

async function fetch(no) {
    const url = `http://sample.bmaster.kro.kr/contacts/${no}`;
    try {
        return await $.ajax(url);
    } catch (err) {
        return null;
    }
}

function printContact(contact) {
    $('#photo').attr('src', contact.photo);
    $('#name').text('이름:  ' + contact.name);
    $('#address').text('주소:   ' + contact.address);
    $('#tel').text('연락처: ' + contact.tel);
}