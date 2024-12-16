import { createClient } from "@supabase/supabase-js"

const supabaseurl = "https://ytuptmkqpqzzhorcgltd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0dXB0bWtxcHF6emhvcmNnbHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMTI5NzQsImV4cCI6MjA0OTg4ODk3NH0.relez2nlQ9uyGK40TEb5CPI0VUJtonakN56T28ZMEVM"

export const supabase = createClient(supabaseurl, supabaseAnonKey)