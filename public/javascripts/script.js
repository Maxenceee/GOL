function f(n, e, t) {
    var s,
        o,
        i,
        a = arguments,
        m = {};
    for (i in e)
        i == "key" ? s = e[i] : i == "ref" ? o = e[i] : m[i] = e[i];
    if (arguments.length > 3)
        for (t = [t], i = 3; i < arguments.length; i++)
            t.push(a[i]);
    if (t != null && (m.children = t), typeof n == "function" && n.defaultProps != null)
        for (i in n.defaultProps)
            m[i] === void 0 && (m[i] = n.defaultProps[i]);
    return G(n, m, s, o, null)
}

function G(n, e) {
    let a = document.createElement(n);
    e.children && (e.children.map(e => {
        a.appendChild(e);
    }), delete e.children)
    Object.keys(e).forEach(u => {
        e[u] && a.setAttribute(u, e[u]);
    });
    return a
}

function Ie(n) {
    return n.composedPath().some(e => e instanceof HTMLElement && e.hasAttribute("data-nodrag"))
}
const ne = class extends HTMLElement {
    constructor() {
        super(...arguments);
        this.dragging = !1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.startOffsetX = 0;
        this.startOffsetY = 0;
        this.startClientX = 0;
        this.startClientY = 0;

        this.preventClickDuringDrag = e => {
            this.dragging && e.preventDefault()
        };
        this.mouseDown = e => {
            !Ie(e) && (e.preventDefault(), addEventListener("mousemove", this.mouseMove), addEventListener("mouseup", this.mouseUp), this.dragStart(e))
        };
        this.mouseMove = e => {
            e.preventDefault(),
            this.dragMove(e)
        };
        this.mouseUp = () => {
            removeEventListener("mousemove", this.mouseMove),
            removeEventListener("mouseup", this.mouseUp),
            this.dragEnd()
        };
    }
    connectedCallback() {
        this.addEventListener("click", this.preventClickDuringDrag, {
            capture: !0
        }),
        this.addEventListener("mousedown", this.mouseDown)
    }
    dragStart({clientX: e, clientY: t})
    {
        document.documentElement.style.userSelect = "none",
        document.documentElement.style.webkitUserSelect = "none",
        this.style.touchAction = "none",
        this.startOffsetX = this.offsetX,
        this.startOffsetY = this.offsetY,
        this.startClientX = e,
        this.startClientY = t
    }
    dragMove({clientX: e, clientY: t})
    {
        Math.abs(e - this.startClientX) + Math.abs(t - this.startClientY) >= 4 && (this.dragging = !0),
        this.offsetX = this.startOffsetX + e - this.startClientX,
        this.offsetY = this.startOffsetY + t - this.startClientY,
        this.style.setProperty("--x", `${this.offsetX}px`),
        this.style.setProperty("--y", `${this.offsetY}px`)
    }
    dragEnd()
    {
        document.documentElement.style.removeProperty("user-select"),
        document.documentElement.style.removeProperty("-webkit-user-select"),
        this.style.removeProperty("touch-action"),
        requestAnimationFrame(() => {
            this.dragging = !1
        })
    }
}

customElements.define('draggable-element', ne);

const mu = class extends HTMLElement {
    constructor() {
        super(...arguments);
        this.min = 1;
        this.max = 100;
        this.value = 10;
        let i = document.createElement("input"),
            s = document.createElement("span");
        this.appendChild(i);
        this.appendChild(s);
        i.type = "range";
        i.min = this.min;
        i.max = this.max;
        i.value = this.value;
        s.innerText = this.value;
    }
    connectedCallback() {
        this.addEventListener("input", this.onInput)
    }
    onInput() {
        this.querySelector("span").innerText = this.querySelector("input").value;
    }
}

customElements.define('panel-slider', mu);

var vt = {
    default: {
        "panel-showreel": {
            top: 25,
            left: 25,
            width: 0,
            height: 0,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            zIndex: 2
        },
    }
}
const transitionIn = function() {
    let e = window.innerWidth,
        t = window.innerHeight,
        s = Array.from(document.querySelectorAll("draggable-element")),
        o = s.map(i => i.getBoundingClientRect());
    for (let i = 0; i < s.length; i++) {
        let a = s[i],
            m = o[i],
            D = m.left + .5 * m.width - .5 * e,
            b = m.top + .5 * m.height - .5 * t;
        Math.abs(D) >= Math.abs(b) ? a.style.setProperty("--x", `${a.offsetX + Math.sign(D) * .5 * e}px`) : a.style.setProperty("--y", `${a.offsetY + Math.sign(b) * .5 * t}px`),
        requestAnimationFrame(() => {
            a.style.transformOrigin = "center center",
            a.style.transition = "transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
            a.addEventListener("transitionend", () => {
                a.style.removeProperty("transform-origin"),
                a.style.removeProperty("transition")
            }, {
                once: !0
            }),
            a.style.setProperty("--x", `${a.offsetX}px`),
            a.style.setProperty("--y", `${a.offsetY}px`)
        })
    }
},
transitionOut = function()
{
    let e = window.innerWidth,
        t = window.innerHeight,
        s = Array.from(document.querySelectorAll("draggable-element")),
        o = s.map(i => i.getBoundingClientRect());
    for (let i = 0; i < s.length; i++) {
        let a = s[i],
            u = o[i],
            f = u.left + .5 * u.width - .5 * e,
            x = u.top + .5 * u.height - .5 * t,
            r = Math.abs(f) >= Math.abs(x);
        a.style.transformOrigin = "center center",
        a.style.transition = "transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
        a.addEventListener("transitionend", () => {
            a.style.removeProperty("transform-origin"),
            a.style.removeProperty("transition")
        }, {
            once: !0
        }),
        r ? a.style.setProperty("--x", `${a.offsetX + Math.sign(f) * .5 * e}px`) : a.style.setProperty("--y", `${a.offsetY + Math.sign(x) * .5 * t}px`)
    }
}
positionAll = function(positions) {
    let selectedPosition = Object.keys(positions)[0];
    let e = window.innerWidth,
        t = window.innerHeight,
        s = Array.from(document.querySelectorAll("draggable-element"));
    for (let o of s) {
        let i = positions[selectedPosition][o.id];
        if (!i)
            continue;
        let a = i.windowWidth,
            m = i.windowHeight,
            D = i.left + .5 * i.width - .5 * a,
            b = i.top + .5 * i.height - .5 * m,
            r = e - a,
            h = t - m,
            g = D * (1 + r / a),
            p = b * (1 + h / m);
        o.offsetX = g - .5 * i.width + .5 * e,
        o.offsetY = p - .5 * i.height + .5 * t,
        o.style.setProperty("--x", `${o.offsetX}px`),
        o.style.setProperty("--y", `${o.offsetY}px`),
        o.style.zIndex = String(i.zIndex)
    }
}
positionAll(vt);

var Me = function(a, b, c) {
    return Le(document, arguments)
},
Le = function(a, b) {
    var c = String(b[0]),
        d = b[1],
        e = b[2] || null;
    c = a.createElement(c);
    if (e && e.in) c.innerHTML = e.in;

    b && (d && typeof e !== "object" && !je(d) ? Ne(c, d, e) : (e && e.type ? c.setAttribute(e.type, d) : d && (c.className = d)));
    return c
},
Ne = function(b, c, d) {
    function e(h, i) {
        b.setAttribute(h, i);
    }
    for (var i = 0; i < Math.min(c.length, d.length); i++) {
        e(c[i], d[i]);
    }
},
Mc = function(a, b) {
    a.classList.add(b);
},
Mr = function(a, b) {
    a.classList.remove(b);
},
Ms = function(a, b, c) {
    je(b) ? a.setAttribute(b, c !== undefined ? c : "") : Ne(a, b, c)
    return a
},
Mrs = function(a, b, c) {
    je(b) ? a.removeAttribute(b, c !== undefined ? c : "") : Ne(a, b, c)
    return a
},
Md = function(a, b) {
    (b.length > 1) ? dj(a, b) : a.appendChild(b);
    return a
},
Mg = function(a, b) {
    return ((typeof b !== "number" && b) || document).getElementsByClassName(a)[(typeof b === "number" && b) || 0]
},
Mqa = function(a, b) {
    return a.querySelectorAll(b)
},
Mq = function(a, b) {
    return a.querySelector(b)
},
Fe = function(a, b) {
    return (b || document).getElementsByTagName(String(a))
},
dj = function(a, b) {
    for(var i = 0; i < b.length; i++) 
        a.appendChild(b[i]);
},
je = function(a) {
    return "string" == typeof a
}

const Table = function(a) {
    let root = a || document.body;
    this.gridProps().genTable(root);
    return (this)
}
let t = Table.prototype;
t.genTable = function(a) {
    this.table = document.createElement("table");
    this.table.id = "grid-table";

    for (let i = 0; i < this.grid_size_y; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < this.grid_size_x; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("class", "cell");
            lps(i, j, cell);
            row.appendChild(cell);
            this.gridTable[j][i] = cell;
        }

        this.table.appendChild(row);
    }
    a.appendChild(this.table);
    return (this);
};
t.gridProps = function() {
    let r = window.innerWidth / window.innerHeight;
    this.csz = 100;
    if (r > 1) {
        this.grid_size_x = this.csz;
        this.grid_size_y = Math.floor(this.csz / r);

        if (this.grid_size_y % 2 == 0)
            this.grid_size_y += 1;

        this.cell_size = Math.floor(window.innerWidth / this.csz);
    } else {
        this.grid_size_x = Math.floor(this.csz * r);
        this.grid_size_y = this.csz;

        if (this.grid_size_x % 2 == 0)
            this.grid_size_x += 1;

        this.cell_size = Math.floor(window.innerHeight / this.csz);
    }
    this.grid = make2DArray(this.grid_size_x, this.grid_size_y);
    this.gridTable = make2DArray(this.grid_size_x, this.grid_size_y);
    return (this);
};
t.countCellNeighbors = function(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + this.grid_size_x) % this.grid_size_x;
            let row = (y + j + this.grid_size_y) % this.grid_size_y;
            // let col = (x + i + this.grid_size_x);
            // let row = (y + j + this.grid_size_y);
            sum += this.grid[col][row];
        }
    }
    sum -= this.grid[x][y];
    return sum;
};
t.updateTable = function() {
    this.grid.forEach((e, x) => {
        e.forEach((u, y) => {
            if (u == 1) {
                this.createAliveCell(x, y);
            } else if (u == 0) {
                this.killCell(x, y);
            }
        });
    });
    return (this);
};
t.updateCells = function() {
    let next = [];
    this.grid.forEach((e, i) => {
        e.forEach((_, j) => {
            let state = this.grid[i][j];
            let neighbors = this.countCellNeighbors(i, j);

            if (state == 0 && neighbors == 3) {
                next.push({x: i, y: j, v: 1});
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next.push({x: i, y: j, v: 0});
            } else {
                next.push({x: i, y: j, v: state});
            }
        });
    });
    next.forEach(e => this.grid[e.x][e.y] = e.v);
    return (this);
};
t.createAliveCell = function(a, b) {
    this.gridTable[a][b].classList.add("alive");
};
t.killCell = function(a, b) {
    this.gridTable[a][b].classList.remove("alive");
};
t.BeginLife = function() {
    this.updateTable().updateCells();
    this.PlayLifeCycle();
    return (this);
};
t.PlayLifeCycle = function() {
    this.lifeCycle = setInterval(() => {
        this.updateTable().updateCells();
    }, 1000 / (this.lifespeed || 10));
    return (this);
};
t.PauseLifeCycle = function() {
    clearInterval(this.lifeCycle);
    return (this);
};
t.SetLifeCycleSpeed = function(a) {
    a && (this.lifespeed = a);
    return (this);
};
t.ClearLife = function() {
    this.PauseLifeCycle();
    this.grid = make2DArray(this.grid_size_x, this.grid_size_y);
    this.updateTable();
    return (this);
};
t.ToggleManualMode = function() {
    this.manualMode = !this.manualMode;
    
    this.table.addEventListener('mousedown', event => {
        if (!this.manualMode) return
        event.preventDefault();
        this.clicking = true;

        this.evtn(event, this);
    });
    this.table.addEventListener('mouseover', event => {
        if (!this.manualMode) return
        this.evtn(event, this);
    });
    this.table.addEventListener('mouseup', event => {
        if (!this.manualMode) return
        event.preventDefault();
        this.clicking = false;
        this.eved(event, this);
    });
    this.table.addEventListener('mouseleave', event => {
        if (!this.manualMode) return
        event.preventDefault();
        this.clicking = false;
        this.eved(event, this);
    });
};
t.evtn = (event, t) => {
    event.preventDefault();
    if (t.clicking && event.target.classList.contains("cell")) {
        let place = clplc(event.target);
        if (t.grid[place[0]][place[1]] == 0)
            t.adwl(place[0], place[1]);
        else
            t.rmvw(place[0], place[1]);
    }
};
t.adwl = function(a, b) {
    this.grid[a][b] = 1;
    this.createAliveCell(a, b);
};
t.rmvw = function(a, b) {
    this.grid[a][b] = 0;
    this.killCell(a, b);
};
t.structAdder = function(s, a, b) {
    if (!s || !a || !b) return
    s.forEach((e) => {
        this.grid[a + e.x][b + e.y] = 1;
    });
    this.updateTable();
};

let wid = function(a) {
    return a.getBoundingClientRect().width
},
dmt = function(a) {
    return a.getBoundingClientRect()
},
sivz = function(a) {
    return document.getElementById(a)
},
lps = (a, b, c) => {
    c.setAttribute("el-x", b);
    c.setAttribute("el-y", a);
},
clplc = (cell) => {
    let text_x = cell.getAttribute("el-x");
    let text_y = cell.getAttribute("el-y");

    return [parseInt(text_x, 10), parseInt(text_y, 10)];
},
make2DArray = function(cols, rows) {
    return new Array(cols).fill(0).map(() => new Array(rows).fill(0));
};

const Menu = function(a) {
    if (!a) return
    this.dragel = sivz("panel-showreel");
    this.isLiving = false;
    this.isPaused = false;
    this.bgn = sivz("bgn-lf");
    this.clr = sivz("clr-lf");
    this.mnl = sivz("mnl-lf");
    this.str = sivz("str-lf");
    this.psi = document.querySelector("panel-slider input");
    this.table = a;
    this.initControls();
};
let m = Menu.prototype;
m.initControls = function() {
    let t = this;
    t.bgn.onclick = function() {
        if (!t.isLiving) {
            t.bgn.innerText = "Pause Life";
            t.psi.disabled = true;
            t.isLiving = true;
            t.table.SetLifeCycleSpeed(t.psi.value);
            t.table.BeginLife();
        } else if (t.isLiving && t.isPaused) {
            t.bgn.innerText = "Pause Life";
            t.psi.disabled = true;
            t.isPaused = false;
            t.table.SetLifeCycleSpeed(t.psi.value);
            t.table.PlayLifeCycle();
        } else if (t.isLiving && !t.isPaused) {
            t.bgn.innerText = "Play Life";
            t.psi.disabled = false;
            t.isPaused = true;
            t.table.PauseLifeCycle();
        }
    };
    t.clr.onclick = function() {
        t.bgn.innerText = "Begin Life";
        t.psi.disabled = false;
        t.isLiving = false;
        t.isPaused = false;
        t.table.ClearLife();
    };
    t.mnl.onclick = function() {
        t.mnl.classList.toggle("active");
        t.table.ToggleManualMode();
    };
    t.str.onclick = function() {
        if (!sivz("panel-structs")) {
            let pos = t.dragel.getBoundingClientRect();
            let l = Me("div", "str-scroll-list"),
                s = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.37521 23.5122C5.8845 24.0098 6.74348 24.0034 7.2284 23.5185L14.4373 16.3096L21.642 23.5164C22.1354 24.0098 22.9934 24.0173 23.4931 23.5101C23.9928 23.0008 23.9949 22.162 23.5015 21.6665L16.2968 14.4501L23.5015 7.24536C23.9949 6.75201 24.0024 5.90358 23.4931 5.40389C22.9838 4.8946 22.1354 4.89249 21.642 5.39546L14.4373 12.6002L7.2284 5.39335C6.74348 4.90093 5.87489 4.88288 5.37521 5.40178C4.87764 5.91108 4.88396 6.75833 5.36888 7.24325L12.5778 14.4501L5.36888 21.6707C4.88396 22.1535 4.86803 23.0125 5.37521 23.5122Z" /></svg>',
                p = Me("div", "menu-close red-h", {in: s});
            Object.keys(gol_structs).forEach((e) => {
                Md(l, Ms(Me("gol-struct", ""), "data-nodrag"));
            });
            let n = Md(Me("draggable-element"), Md(Me("article", "panel panel-medium-small"),
                    [Md(Me("header", "panel-header"), [Me("p", "", {in: "Stuctures"}), p]), Md(Me("div", "str-list"), l)]));
            n.id = "panel-structs";
            p.onclick = () => n.remove();
            Md(Fe("main")[0], n);
            positionAll({
                default: {
                    "panel-structs": {
                        top: pos.top,
                        left: (pos.width * 2 + pos.left + 10) < window.innerWidth ? pos.width + pos.left + 10 : pos.left - 10 - pos.width,
                        width: 0,
                        height: 0,
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight,
                        zIndex: 3,
                    },
                }
            });
        }
    };
    t.dragel.querySelector(".menu-close").onclick = function() {
        t.closed = !t.closed;
        let l = t.dragel.querySelector(".panel"),
            p = t.dragel.querySelector(".circled-open");
        t.dragel.classList.toggle("circled");
        l.classList.toggle("circled");
        p.classList.remove("hide");
        Ms(l, "data-nodrag");
        t.dragel.style.setProperty("--x", "25px");
        t.dragel.style.setProperty("--y", "25px");
        let pos = l.getBoundingClientRect();
        Ms(l, "drg-width", pos.width);
        Ms(l, "drg-height", pos.height);
        anime({
            targets: l,
            width: '75px',
            height: '75px',
            easing: 'spring(1, 70, 10, 5)',
            borderRadius: ['24px', '50%'],
            duration: 500,
        });
    };
    t.dragel.querySelector(".circled-open").onclick = function() {
        let l = t.dragel.querySelector(".panel"),
            p = t.dragel.querySelector(".circled-open");
        l.classList.remove("circled");
        p.classList.add("hide");
        let an = anime({
            targets: l,
            width: l.getAttribute("drg-width"),
            height: l.getAttribute("drg-height"),
            easing: 'spring(1, 80, 10, 0)',
            borderRadius: ['50%', '24px'],
            duration: 500,
        });
        positionAll({
            default: {
                "panel-showreel": {
                    top: 25,
                    left: 25,
                    width: 0,
                    height: 0,
                    windowWidth: window.innerWidth,
                    windowHeight: window.innerHeight,
                    zIndex: 3,
                },
            }
        });
        an.finished.then(() => {
            l.style.width = l.style.height = null;
            Mrs(l, "data-nodrag");
            t.dragel.classList.remove("circled");
        })
    };
}


let gol_structs = {
    helice: [
        {x: 1, y: 0},
        {x: 0, y: 0},
        {x: -1, y: 0},
    ],
    littleSpaceShip: [
        {x: 0, y: 0},
        {x: 0, y: -2},
        {x: 1, y: -3},
        {x: 2, y: -3},
        {x: 3, y: -3},
        {x: 4, y: -3},
        {x: 4, y: -2},
        {x: 4, y: -1},
        {x: 3, y: 0},
    ],
    plannersCannon: [
        {x: 0, y: 0},
        {x: -1, y: 0},
        {x: -1, y: 1},
        {x: -1, y: -1},
        {x: -2, y: 2},
        {x: -2, y: -2},
        {x: -3, y: 0},
        {x: -4, y: -3},
        {x: -4, y: 3},
        {x: -5, y: -3},
        {x: -5, y: 3},
        {x: -6, y: -2},
        {x: -6, y: 2},
        {x: -7, y: -1},
        {x: -7, y: 1},
        {x: -7, y: 0},
        {x: -16, y: -1},
        {x: -17, y: 0},
        {x: -17, y: -1},
        {x: -16, y: 0},
        {x: 3, y: -1},
        {x: 3, y: -2},
        {x: 3, y: -3},
        {x: 4, y: -1},
        {x: 4, y: -2},
        {x: 4, y: -3},
        {x: 5, y: -4},
        {x: 5, y: 0},
        {x: 7, y: -4},
        {x: 7, y: 0},
        {x: 7, y: -5},
        {x: 7, y: 1},
        {x: 17, y: -2},
        {x: 18, y: -2},
        {x: 17, y: -3},
        {x: 18, y: -3},
    ]
}

const beginGame = function() {
    let table = new Table(document.querySelector("gol-grid"));
    new Menu(table);
    table.structAdder(gol_structs.plannersCannon, 20, 10);
};

(function() {
    window.setTimeout(() => beginGame());
})();
