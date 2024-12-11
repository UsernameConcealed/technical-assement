import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = 'https://yaznypdqnanlvlqgjilu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhem55cGRxbmFubHZscWdqaWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4ODQyNTEsImV4cCI6MjA0OTQ2MDI1MX0.NxAuI0byJlUrjYWL341_U566e_3GjMv2tJsVOCC37n0'

export const supabase = createClient (SUPABASE_URL, SUPABASE_ANON_KEY);