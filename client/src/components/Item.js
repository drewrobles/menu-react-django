import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => {
    return <div className={``}>
        <div>
            <p className={`card-text`}>
                <strong>{props.data.name.toUpperCase() + " "}</strong>
            </p>
            {props.data.ingredients.toUpperCase()}
        </div>
        <div class="d-flex justify-content-end mb-1">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-light border">Customize</button>

            </div>
            <div class="btn-group" role="group" aria-label="Second group">
                <button type="button" class="btn btn-primary">Add to order</button>
            </div>
        </div>
           
        </div>
    </div>
}