export function validate() {
    const name_error = document.getElementById('name_error')!;
    const Lname_error = document.getElementById('Lname_error');
    const email_error = document.getElementById('email_error');
    const query_error = document.getElementById('query_error');
    const message_error = document.getElementById('message_error');
    const consent_error = document.getElementById('consent_error');

    const name = document.getElementById('name')!;
    const Lname = document.getElementById('Lname');
    const email = document.getElementById('email');
    const query = document.getElementById('query');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    
    console.log(name.value);

    if(name.value === '') {
        console.log('empty');
    }else{
        console.log('not hotdog');
    }

}