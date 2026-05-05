
const SUPABASE_URL = 'https://dagodjtvsurrsndnryax.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_diDckZEjvFtSYE6VH_AxiA_aSB_wz_w';

// We name it 'supabaseApp' and attach it to the window so it doesn't conflict with the library
window.supabaseApp = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase connected successfully!");

