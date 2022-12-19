export interface GoodsInfo {

    id:string;
    name:string;
    category: string;
    eng_name: string;
    image_path:string;
    img_detail_paths?:Array<string>;
    img_detail_path:string;
    img_length: number;
    
}