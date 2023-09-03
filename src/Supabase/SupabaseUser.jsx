import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_SUPABASE_PROJECT_UserURL;
const projectKey = import.meta.env.VITE_SUPABASE_PROJECT_UserKEY;

export const supabaseUser = createClient(projectURL, projectKey);
