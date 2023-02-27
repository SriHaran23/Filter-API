import React from 'react'
import Albums from './Albums';
import Comments from './Comments';
import Photos from './Photos';
import Posts from './Posts';
import Todos from './Todos';
import Users from './Users';

function Index() {
  return (
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="post-tab" data-bs-toggle="tab" data-bs-target="#post-tab-pane" type="button" role="tab" aria-controls="post-tab-pane" aria-selected="true">Posts</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="comment-tab" data-bs-toggle="tab" data-bs-target="#comment-tab-pane" type="button" role="tab" aria-controls="comment-tab-pane" aria-selected="false">Comments</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="album-tab" data-bs-toggle="tab" data-bs-target="#album-tab-pane" type="button" role="tab" aria-controls="album-tab-pane" aria-selected="false">Albums</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="photo-tab" data-bs-toggle="tab" data-bs-target="#photo-tab-pane" type="button" role="tab" aria-controls="photo-tab-pane" aria-selected="false">Photos</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="todo-tab" data-bs-toggle="tab" data-bs-target="#todo-tab-pane" type="button" role="tab" aria-controls="todo-tab-pane" aria-selected="false">Todos</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="user-tab" data-bs-toggle="tab" data-bs-target="#user-tab-pane" type="button" role="tab" aria-controls="user-tab-pane" aria-selected="false">Users</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="post-tab-pane" role="tabpanel" aria-labelledby="post-tab" tabindex="0">
                <div><h1>Posts</h1></div>
                <div><Posts></Posts> </div>
            </div>
            <div class="tab-pane fade" id="comment-tab-pane" role="tabpanel" aria-labelledby="comment-tab" tabindex="0">
                <div><h1>Comments</h1></div>
                <div><Comments></Comments> </div>
            </div>
            <div class="tab-pane fade" id="album-tab-pane" role="tabpanel" aria-labelledby="album-tab" tabindex="0">
                <div><h1>Albums</h1></div>
                <div><Albums></Albums> </div>
            </div>
            <div class="tab-pane fade" id="photo-tab-pane" role="tabpanel" aria-labelledby="photo-tab" tabindex="0">
                <div><h1>Photos</h1></div>
                <div><Photos></Photos> </div>
            </div>
            <div class="tab-pane fade" id="todo-tab-pane" role="tabpanel" aria-labelledby="todo-tab" tabindex="0">
                <div><h1>Todos</h1></div>
                <div><Todos></Todos> </div>
            </div>
            <div class="tab-pane fade" id="user-tab-pane" role="tabpanel" aria-labelledby="user-tab" tabindex="0">
                <div><h1>User</h1></div>
                <div><Users></Users> </div>
            </div>
        </div>
    </div>
  )
}

export default Index