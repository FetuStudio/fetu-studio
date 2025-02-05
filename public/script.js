// Conectar con Supabase directamente (sin variables de entorno)
const supabaseUrl = 'https://emcriaayyogfjuwiatyx.supabase.co'; // Tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY3JpYWF5eW9nZmp1d2lhdHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NjU5NzQsImV4cCI6MjA1NDM0MTk3NH0.yaXdIQzxHMKK541XKqKAPCbMXRs2J59DYP4J9lxPOIU'; // Tu API Key pública de Supabase
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Función para registrar un usuario
document.getElementById('registroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Llamada a la API de Supabase para registrar el usuario
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        alert('Error: ' + error.message);
    } else {
        // Si el registro es exitoso, insertar el usuario en la tabla "users"
        const { data, error: insertError } = await supabase
            .from('users') // Nombre de la tabla personalizada
            .insert([
                { email: email, password: password }
            ]);

        if (insertError) {
            alert('Error al insertar en la tabla de usuarios: ' + insertError.message);
        } else {
            alert('¡Registro exitoso! Te hemos enviado un correo de verificación.');
        }
    }
});

// Función para loguearse
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Llamada a la API de Supabase para iniciar sesión
    const { user, error } = await supabase.auth.signIn({
        email,
        password,
    });

    if (error) {
        alert('Error: ' + error.message);
    } else {
        alert('¡Bienvenido!');
    }
});

