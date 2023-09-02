import { createClient } from '@supabase/supabase-js'

const anonkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcG94Z3d5em9zd29nZWtzYmhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzYyMzUzMCwiZXhwIjoyMDA5MTk5NTMwfQ.xHIYzLxrcVVpD6zmrCQ5-8S0n6ckubXADkaRPos-rRM'
export const supabase = createClient('https://<project>.supabase.co', anonkey)