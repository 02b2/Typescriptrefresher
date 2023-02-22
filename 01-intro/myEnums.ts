enum SeatChoice {
    AISLE = 10, // you can asign an enum or have default which will increment naturally, if you asign a string you need to provide all with a string value
    MIDDLE,
    WINDOW
}

const Seat = SeatChoice.AISLE // using . will bring up the only options avaliable, as each option is added a new will be avaliable, will also now provide enum value


export {}