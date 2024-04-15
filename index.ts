/*
    Tính trừu tượng (abstraction): Đây là khả năng của chương trình bỏ qua hay không chú ý đến một số khía cạnh
    của thông tin mà nó đang trực tiếp làm việc lên, nghĩa là nó có khả năng tập trung vào những cốt lõi cần 
    thiết. Mỗi đối tượng phục vụ như là một "động tử" có thể hoàn tất các công việc một cách nội bộ, báo cáo, 
    thay đổi trạng thái của nó và liên lạc với các đối tượng khác mà không cần cho biết làm cách nào đối tượng 
    tiến hành được các thao tác. Tính chất này thường được gọi là sự trừu tượng của dữ liệu.
    Tính trừu tượng còn thể hiện qua việc một đối tượng ban đầu có thể có một số đặc điểm chung cho nhiều đối 
    tượng khác như là sự mở rộng của nó nhưng bản thân đối tượng ban đầu này có thể không có các biện pháp thi 
    hành. Tính trừu tượng này thường được xác định trong khái niệm gọi là lớp trừu tượng hay lớp cơ sở trừu 
    tượng.

    TypeScript sử dụng Abstract class và Interface để thể hiện tính chất này.
    ví dụ:
    // với Abstract
    abstract class Avengers {
    readonly name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    // Hàm này được triển khai ở lớp dẫn xuất
    abstract fight(): void;
}

class IronMan extends Avengers {
    // Constructor trong lớp dẫn xuất phải gọi super()
    constructor(name: string) {
        super(name);
    }

    fight(): void {
        console.log(`${this.name} is a super warrior`)
    }
 
    fly(): void {
        console.log(`${this.name} can fly`);
    }
}

// Có thể tạo một tham chiếu với kiểu dữ liệu là lớp trừu tượng
let ironMan: Avengers;

//Error: không thể tạo một thể hiện của lớp trừu tượng.
ironMan = new Avenger('Tony Stark');

//OK: Có thể tạo một thể hiện từ lớp dẫn xuất.
ironMan = new IronMan('Tony Stark');

ironMan.fight();

// Error: phương thức không tồn tại trong lớp trừu tượng (Avengers).
ironMan.fly();


// với Interface
interface Avengers {
    readonly name: string;

    // Hàm này bắt buộc phải được triển khai ở lớp dẫn xuất
    fight(): void;
}

interface Power {
    // Hàm này bắt buộc phải được triển khai ở lớp dẫn xuất
    fly(): void;
}

class IronMan implements Avengers, Power {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    fight(): void {
        console.log(`${this.name} is a super warrior`);
    }

    fly(): void {
        console.log(`${this.name} can fly`);
    }
}

// Có thể tạo một tham chiếu với kiểu dữ liệu là interface
let ironMan: Avengers;

//Error: Không thể tạo một thể hiện của interface
ironMan = new Avengers();

ironMan = new IronMan('Tony Stark');
ironMan.fight();

// Error: phương thức không tồn tại trong interface Avengers
ironMan.fly();

Interface:
    - Một class có thể thực thi nhiều interface (đa kế thừa)
    - Chỉ có thể khai báo, không thể định nghĩa code trong method
    - Mọi method, property mặc định là public
    - Interface không thể kế thừa Abstract class

Abstract class:
    - Không hỗ trợ đa kế thừa
    - Có thể định nghĩa code trong method
    - Có thể chỉ định modifier (private, protected...)
    - Abstract class có thể implement interface
*/

/*
    Tính đa hình trong OOP cho phép một đối tượng có thể có nhiều hình dạng (lớp) và cho phép các đối tượng 
    con thừa kế từ đối tượng cha có thể được sử dụng trong các tình huống khác nhau mà không cần biết đến 
    loại cụ thể của đối tượng đó.

    // ví dụ:
    function animalSound(animal: Animal) {
    animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

animalSound(dog);  // Output: Woof! Woof!
animalSound(cat);  // Output: Meow! Meow!

Trong ví dụ này, có một hàm animalSound nhận một tham số kiểu Animal. Bởi vì cả Dog và Cat đều là 
Animal, chúng ta có thể truyền chúng vào hàm animalSound và gọi phương thức makeSound mà không cần biết đến 
loại cụ thể của đối tượng.

*/
