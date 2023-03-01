let distancia = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
basic.forever(function () {
    distancia = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 40)
        basic.pause(2000)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 40)
        basic.pause(2000)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 40)
        basic.pause(2000)
    }
    if (distancia > 0 && distancia < 50) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # #
            . # # # #
            `)
    }
})
