class Matrix4x4 {
    /**
     * 00 10 20 30
     * 01 11 21 31
     * 02 12 22 32
     * 03 13 23 33
     */
    public m00:number;
    public m01:number;
    public m02:number;
    public m03:number;

    public m10:number;
    public m11:number;
    public m12:number;
    public m13:number;

    public m20:number;
    public m21:number;
    public m22:number;
    public m23:number;

    public m30:number;
    public m31:number;
    public m32:number;
    public m33:number;

    public constructor(column0:Vector4,column1:Vector4,column2:Vector4,column3:Vector4) {
        this.m00 = column0.x;
        this.m01 = column0.y;
        this.m02 = column0.z;
        this.m03 = column0.w;

        this.m10 = column1.x;
        this.m11 = column1.y;
        this.m12 = column1.z;
        this.m13 = column1.w;

        this.m20 = column2.x;
        this.m21 = column2.y;
        this.m22 = column2.z;
        this.m23 = column2.w;

        this.m30 = column3.x;
        this.m31 = column3.y;
        this.m32 = column3.z;
        this.m33 = column3.w;
    }
}