class Qlnv {
    constructor(id,name,image,created_at){
        this._id = id
        this._name = name
        this._image = image
        this._created_at = created_at 
    }

    get id(){
        return this._id
    }

    set id(value){
        this._id = value
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

    get image(){
        return this.image
    }

    set image(value){
        this._image = value
    }

    get created_at(){
        return this._created_at
    }    

    set created_at(value){
        this._created_at = value
    }

    getString(){
        return `Id: ${this._id} \nName: ${this._name} \nImage ${this._image} \nCreated_at: ${this._created_at}`
    }

    getInfor(){
        return `
            <div class="card" id="card">
                <span  class='close'>&times</span>
                <div class="content">
                <img src="${this._image}" alt="Avatar" style="width: 100%;">
                    <div class="content">
                        <p><b>Id: </b>${this._id}</p>
                        <p><b>Name: </b>${this._name}</p> 
                        <p><b>Created at: </b>${this._created_at}</p>
                    </div>
                </div>
            </div>
        `

    }
}

export default Qlnv;