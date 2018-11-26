class Transform {
    
    public position:Vector3;
    public scale:Vector3;
    public rotation:Quaternion;

    public constructor(position?:Vector3,scale?:Vector3,rotation?:Quaternion) {
        this.position = position || new Vector3(0,0,1);
        this.scale = scale || new Vector3(1,1,1);
        this.rotation = rotation || new Quaternion(0,0,0,1);
    }
}