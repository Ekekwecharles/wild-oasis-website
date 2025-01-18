import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://csvsenjjwidwiviyykga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdnNlbmpqd2lkd2l2aXl5a2dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNjU5MDgsImV4cCI6MjA1MTk0MTkwOH0.uYo5rNvEprKVbUc4YfB13tXfjecJM2vtng3j3h4mFZw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
