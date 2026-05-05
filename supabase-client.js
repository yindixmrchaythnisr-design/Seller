// Replace these with your actual Supabase project details later
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_LONG_ANON_KEY';

// Initialize the Supabase client
// The 'window.supabase' object comes from the script tag we will put in the HTML files
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase connected successfully!");