// Replace these with your actual Supabase project details later
const SUPABASE_URL = 'https://dagodjtvsurrsndnryax.supabase.co/rest/v1/';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_diDckZEjvFtSYE6VH_AxiA_aSB_wz_w';

// Initialize the Supabase client
// The 'window.supabase' object comes from the script tag we will put in the HTML files
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase connected successfully!");
