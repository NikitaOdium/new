import { writable } from 'svelte/store';


const ListToDo = writable([{text: 'Write my first post', status: false},
                        {text: 'Upload the post to the blog', status: false},
                        {text: 'Publish the post at Facebook', status: false}])

export default ListToDo