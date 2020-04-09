# ELF文件类型和结构

Executable And Linkable File

## 类型

1) 可重定位的对象文件(Relocatable file)，也就是平常说的目标文件，后缀为.o；

2) 可执行的对象文件(Executable file)；

3) 可被共享的对象文件(Shared object file)。

## 结构

ELF文件由4部分组成：ELF header，Program header table 、 Section、Section header table

除ELF头位置固定，其它部分位置、大小不固定，可以由ELF头的内容确定，且可以不存在。

### ELF header

- **e_ident**  16字节	开头4字节（0x7F ELF）表示该文件是ELF文件（魔数），和其它一些与机器无关的信息
- **e_type** 类型 如表示可执行文件的值是2

- **e_machine** 该程序对应的体系结构 如表示Intel 80386 的是3
- **e_version**  文件版本
- **e_entry**  程序的入口地址
- **e_phoff**  (e_program header offest)  Program header table部分在文件中的偏移量
- **e_soff** (e_section offest) section部分在文件中的偏移量
- **e_flags** 对IA32（英特尔*32*位体系架构）而言，此项位0

- **e_ehsize** (e_ElF header) 的大小（以字节计数）
- **e_phentsize** (e_program header entry size) program header entry的大小
- **e_phnum** (e_program header number) program header entry 数量
- **e_shentsize** (e_section header table) section header entry的大小
- **e_shnum** (e_section header number) section header entry 数量
- **e_shstrndx** (e_section header string index) 包含节名称的字符串表是第几个节（从0开始)，这个表示的是.shstrtab section的section header在section header table中的序列

### Program header

一个段在文件中的位置大小以及它被放进内存后所在位置和大小

- **p_type** 当前Program header Entry 所描述的段的类型
- **p_offset** 段的第一个字节在文件中的偏移
- **p_vaddr** 段的第一个字节在内存中的虚拟地址
- **p_addr** 在物理地址定位相关的系统中，此项是物理地址保留
- **p_filesz** 段在文件中的长度
- **p_memsz** 段在内存中的长度
- **p_flags** 与段相关的标志
- **p_align** 根据此项值来确定段在文件以及内存中如何对齐