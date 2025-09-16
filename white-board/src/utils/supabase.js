
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://neccnusngpbzcptlhqaa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lY2NudXNuZ3BiemNwdGxocWFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NDcwOTAsImV4cCI6MjA3MzUyMzA5MH0.-Oxrpyj0sckI_344lehQSIK2dUAxFhUkDndL_Hgv6So'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;