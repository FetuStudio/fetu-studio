// URL de tu Supabase (copia esta de tu proyecto Supabase)
const supabaseUrl = 'https://emcriaayyogfjuwiatyx.supabase.co'; 

// Tu clave pública de la API (copia esta de tu proyecto Supabase)
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtY3JpYWF5eW9nZmp1d2lhdHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NjU5NzQsImV4cCI6MjA1NDM0MTk3NH0.yaXdIQzxHMKK541XKqKAPCbMXRs2J59DYP4J9lxPOIU';

// Crear cliente de Supabase
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Función para insertar datos
async function registerUser(email, password) {
  const { data, error } = await supabase
    .from('users')
    .insert([
      { email: email, password: password }
    ]);

  if (error) {
    console.error('Error al insertar datos:', error);
  } else {
    console.log('Datos insertados correctamente:', data);
  }
}

// Ejemplo de registro
registerUser('test@example.com', 'contraseña123');
