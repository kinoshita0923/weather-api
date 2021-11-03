const ChangePrefecture = (props) => {
    return (
        <select name="select" onChange={(e) => props.handleCity(e.target.value)} multiple size={25} >
            <option value={"016010"}>北海道(札幌)</option>
            <option value={"020010"}>青森県(青森)</option>
            <option value={"030010"}>岩手県(盛岡)</option>
            <option value={"040010"}>宮城県(仙台)</option>
            <option value={"050010"}>秋田県(秋田)</option>
            <option value={"060010"}>山形県(山形)</option>
            <option value={"070010"}>福島県(福島)</option>
            <option value={"080010"}>茨城県(水戸)</option>
            <option value={"090010"}>栃木県(宇都宮)</option>
            <option value={"100010"}>群馬県(前橋)</option>
            <option value={"110010"}>埼玉県(さいたま)</option>
            <option value={"120010"}>千葉県(千葉)</option>
            <option value={"130010"}>東京都(東京)</option>
            <option value={"140010"}>神奈川県(横浜)</option>
            <option value={"150010"}>新潟県(新潟)</option>
            <option value={"160010"}>富山県(富山)</option>
            <option value={"170010"}>石川県(金沢)</option>
            <option value={"180010"}>福井県(福井)</option>
            <option value={"190010"}>山梨県(甲府)</option>
            <option value={"200010"}>長野県(長野)</option>
            <option value={"210010"}>岐阜県(岐阜)</option>
            <option value={"220010"}>静岡県(静岡)</option>
            <option value={"230010"}>愛知県(名古屋)</option>
            <option value={"240010"}>三重県(津)</option>
            <option value={"250010"}>滋賀県(大津)</option>
            <option value={"260010"}>京都府(京都)</option>
            <option value={"270000"}>大阪府(大阪)</option>
            <option value={"280010"}>兵庫県(神戸)</option>
            <option value={"290010"}>奈良県(奈良)</option>
            <option value={"300010"}>和歌山県(和歌山)</option>
            <option value={"310010"}>鳥取県(鳥取)</option>
            <option value={"320010"}>島根県(松江)</option>
            <option value={"330010"}>岡山県(岡山)</option>
            <option value={"340010"}>広島県(広島)</option>
            <option value={"350010"}>山口県(山口)</option>
            <option value={"360010"} selected >徳島県(徳島)</option>
            <option value={"370000"}>香川県(高松)</option>
            <option value={"380010"}>愛媛県(松山)</option>
            <option value={"390010"}>高知県(高知)</option>
            <option value={"400010"}>福岡県(福岡)</option>
            <option value={"410010"}>佐賀県(佐賀)</option>
            <option value={"420010"}>長崎県(長崎)</option>
            <option value={"430010"}>熊本県(熊本)</option>
            <option value={"440010"}>大分県(大分)</option>
            <option value={"450010"}>宮崎県(宮崎)</option>
            <option value={"460010"}>鹿児島県(鹿児島)</option>
            <option value={"471010"}>沖縄県(那覇)</option>
        </select>
    );
};

export default ChangePrefecture;