import { writable } from 'svelte/store';
import { createClient } from "@supabase/supabase-js";

const ListToDo = writable([{text: 'Write my first post', status: false},
                        {text: 'Upload the post to the blog', status: false},
                        {text: 'Publish the post at Facebook', status: false}])

export default ListToDo

export const selected = writable(0)

export const supabase = createClient(
    import.meta.env.VITE_PUBLIC_SUPABASE_URL,
    import.meta.env.VITE_PUBLIC_SUPABASE_KEY
)

const user = {user:null}
export const supauser = writable(user)
  