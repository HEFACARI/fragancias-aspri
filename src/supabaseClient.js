import { createClient } from "@supabase/supabase-js" //trae la función que nos permite crear la conexión con Supabase.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL //obtiene la URL de tu proyecto.
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY //obtiene la clave pública que utilizará React para comunicarse con Supabase.

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)