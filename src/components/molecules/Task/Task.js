import { Component } from "../../../core";

export class Task extends Component {
    constructor() {
        super();
        this.state = {
            isEditting: false, 
        }
    }

    static get observedAttributes() {
        return ['title', 'id', 'iscompleted']
    }

    toggleEditting = () => {
        this.setState((state) => {
            return {
                ...state,
                isEditting: !state.isEditting,
            };
        })
    }


    onClick = (evt) => {
        const target = evt.target;
        if(target.closest('.edit-action')) {
            this.toggleEditting();
        }
        if(target.closest('.cancel')) {
            this.toggleEditting();
        }
        
    }

   

    componentDidMount() {
        this.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
      return `
        <li class="list-group-item">
                <div class="form-check d-flex justify-content-between align-items-center">
                ${this.state.isEditting
                ? `<my-input-group 
                    type="edit-task" 
                    isshowcancelbutton="true"
                    taskid="${this.props.id}" 
                    value="${this.props.title}"
                >
                </my-input-group>`
            : `
                  <div>
                      <input 
                        class="form-check-input" 
                        type="checkbox"${JSON.parse(this.props.iscompleted) ? "checked" : ""} 
                        id="${this.props.id}">
                      <label class="form-check-label" for="${this.props.id}">
                        ${this.props.title}
                      </label>
                    </div>
                    <div class='d-flex'>
                      <button data-id="${this.props.id}" 
                      class="btn btn-danger btn-sm m-2 delete-action">Delete</my-button>
                      <button data-id="${this.props.id}" 
                      class="btn btn-sm btn-primary m-2 edit-action">Edit</my-button>
                    </div>
              </div>
              `
            }
            </li>
        `
    }
}

customElements.define('my-task', Task);