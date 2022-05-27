let parent = document.querySelector("#parent");
for(let i=0; i<5; i++){
    let item = document.createElement('div');
    item.className = 'card col-md-3';
    item.innerHTML = `<h4 class="card-title">My Todo</h4>
    <div class="card-body">
        <p class="card-text">Learn React</p>
        <div class="d-flex justify-content-end"> 
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Delete Task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Are you sure?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">OK</button>
                </div>
            </div>
        </div>
    </div>`;

    parent.appendChild(item);
}