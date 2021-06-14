<?php 

$URL = 'http://localhost/SitioWeb/';
$lang = ($_GET['lan'] == 'es' || $_GET['lan'] == 'en') ? $_GET['lan'] : 'es';

$titles = [
    'es' => [
        'education' => 'EDUCACIÓN',
        'skills' => 'HABILIDADES'
    ],
    'en' => [
        'education' => 'EDUCATION',
        'skills' => 'SKILLS'
    ]
];

$education = [
    'es' => [
        'Educación Secundaria' => [
            'letter' => 'S',
            'lyf' => ['Instituto Pablo VI - Misioneros de la Consolata', 'Febrero 2015 - Diciembre 2020'],
            'content' => 'Me gradue de esta institución sin recursar ningun año o materia, con notas sobresalientes y con un llamado al mérito de "Segundo Portaestandarte".',
            'title' => '<b>Título:</b> Bachiller en Economía y Administración de Empresas.'
        ],
        'Educación Universitaria' => [
            'letter' => 'U',
            'lyf' => ['Universidad Nacional de Córdoba - Facultad de Matemática, Astronomía, Física y Ciencias de la Computación', 'Marzo 2021 - Actualidad'],
            'content' => 'Actualmente, estoy cursando primer año de la universidad, en la carrera de <i>Licenciatura en Ciencias de la Computación.</i>',
            'title' => false
        ]
    ],
    'en' => [
        'Highschool Education' => [
            'letter' => 'H',
            'lyf' => ['Instituto Pablo VI - Misioneros de la Consolata', 'February 2015 - December 2020'],
            'content' => 'I graduated from this institution without recursing any year or subject, with grades outstanding and with a call to merit of "Second Standard Bearer".',
            'title' => '<b>Degree:</b> Bachelor of Economics and Business Administration.'
        ],
        'Universitary Education' => [
            'letter' => 'U',
            'lyf' => ['Universidad Nacional de Córdoba - Facultad de Matemática, Astronomía, Física y Ciencias de la Computación', 'March 2021 - Present'],
            'content' => "Currently, I am in my first year of university, in the career of <i> Bachelor's Degree in Computer Science. </i>'",
            'title' => false
        ]
    ]
];

                                        


$skills = [
    'personal' => [
        'es' => [
            'title' => 'PERSONAL',
            'content' => [
                    'Trabajo en Equipo' => '90%',
                    'Creatividad' => '80%',
                    'Dedicación' => '90%',
                    'Responsabilidad' => '80%',
                    'Aprendizaje' => '90%',
                    'Actitud' => '70%',
                    'Manejo de Emociones' => '70%'
            ]
        ],
        'en' => [
            'title' => 'PERSONAL',
            'content' => [
                    'Teamwork' => '90%',
                    'Creativity' => '80%',
                    'Dedication' => '90%',
                    'Responsability' => '80%',
                    'Learn' => '90%',
                    'Attitude' => '70%',
                    'Emotion Management' => '70%'
            ]
        ]
    ],
    'professional' => [
        'es' => ['title' => 'PROFESIONAL'],
        'en' => ['title' => 'PROFESSIONAL'],
        'content' => [
            'HTML' => '70%',
            'CSS' => '60%',
            'Bootstrap' => '60%',
            'JavaScript' => '50%',
            'AJAX' => '40%',
            'JQuery' => '40%',
            'PHP' => '60%',
            'Python' => '80%',
            'MySQL' => '60%',
            'VUE' => '50%'
        ]
    ]
];

?>

<!DOCTYPE html>
<html lang="<?= $lang ?>">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curriculum Vitae</title>

    <link rel="stylesheet" href="<?= $URL ?>assets/css/font-awesome-4.7.0/css/font-awesome.min.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="//github.com/downloads/lafeber/world-flags-sprite/flags32.css">

    <link rel="stylesheet" href="<?= $URL ?>assets/css/styles.css">

</head>

<body>
    <div class="nav py-1">
        <button class="btn btn-light px-auto my-2 mx-3">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div>
            <ul class="f32 p-0 m-0 h-100">
                <li class="flag es m-auto"></li>
                <li class="flag us m-auto"></li>
            </ul>
        </div>
    </div>
    <div class="page-content d-flex">
        <div class="container">
            <div class="section personal-card my-6">
                <div class="row">
                    <div class="col-sm-12 col-md-7" id="personal-card-information">
                        <div class="card-content p-4">
                            <div class="row">
                                <div class="card-head">
                                    <h4 class="text-uppercase left">Gonzalo Bordón</h4>
                                    <h6 class="text-capitalize left mt-2">Estudiante de Licenciatura en Ciencias de la
                                        Computación</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="py-4">
                                    <ul class="fa-ul my-0">
                                        <li>
                                            <span class="title"><i class="center fa fa-envelope pe-2 pt-2"></i></span>
                                            <span class="content">bordonnet@hotmail.com</span>
                                        </li>
                                        <li>
                                            <span class="title"><i
                                                    class="center fa fa-phone-square pe-2 pt-2"></i></span>
                                            <span class="content">+54 3564 51-4783</span>
                                        </li>
                                        <li>
                                            <span class="title"><i
                                                    class="center fa fa-address-card pe-2 pt-2"></i></span>
                                            <span class="content">Frontera, Santa Fe, Argentina</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="py-4">
                                    <a href="https://www.instagram.com/gonzalo_bordon02/"
                                        class="btn-floating color-ig"><i class="fa fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/gonzalobordon02"
                                        class="btn-floating color-in"><i class="fa fa-linkedin"></i></a>
                                    <a href="#" class="btn-floating color-gh"><i class="fa fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-5 pe-0" id="personal-card-image">
                        <div class="profile container p-0">
                            <div id="profile-slant"></div>
                            <img src="<?= $URL ?>assets/media/images/me.jpg" class="img-responsive" id="profile-image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="section my-6 p-5">
                <p>
                    Hola! Soy Gonzalo Bordón, un Pseudo-Junior Developer que tiene:
                    <ul class="fa-ul">
                        <li style="color: #fe0115;">
                            <span class="title"><i class="center fa fa-times fa-2x" style="width:1.2em;"></i></span>
                            <span class="content align-text-bottom"><i class="fa fa-battery-quarter"></i> en
                                experiencia laboral...</span>
                        </li>
                        <li style="color: #06A763;">
                            <span class="title"><i class="center fa fa-check fa-2x" style="width:1.2em;"></i></span>
                            <span class="content align-text-bottom">Pero <i class="fa fa-battery-full"></i> en
                                ganas de aprender y desarrollarme!</span>
                        </li>
                    </ul>
                    Todo el tiempo estoy tratando de pensar en algún proyecto para crear, y aunque mi fuerte es
                    Python, siempre trato de crear aplicaciones y programas con otros lenguajes o herramientas
                    para ir innovandome.
                </p>
                <div class="row pt-4">
                    <div class="d-flex col-sm-12 col-md-6 my-2">
                        <button class="btn btn-green mx-auto w-75">Descarga mi CV</button>
                    </div>
                    <div class="d-flex col-sm-12 col-md-6 my-2">
                        <button class="btn btn-green mx-auto w-75">Contáctame</button>
                    </div>
                </div>

            </div>
            <div class="section-div">
                <div class="row">
                    <h4 class="text-center"><i class="fa fa-graduation-cap" aria-hidden="true"></i> <?= $titles[$lang]['education'] ?></h4>
                    <div class="time-line py-5">
                        <div id="line"></div>
                        <?php 
                        $i = 1;
                        foreach ($education[$lang] as $name => $edu) {
                            if ($i % 2 == 1) {
                                $class = 'justify-content-start';
                                $ball = "b-left";
                            } else {
                                $class = 'justify-content-end';
                                $ball = "b-right";
                            } 
                            ?>
                            <div class="block-line <?= $class ?>">
                                <ball class=<?= $ball ?>>
                                    <p><?= $edu['letter'] ?></p>
                                </ball>
                                <div class="line">
                                    <div class="card-content">
                                        <h5 class="timeline-title"><?= $name ?></h5>
                                        <div class="row pb-3">
                                            <div class="timeline-info">
                                                <h6>
                                                    <small><?= $edu['lyf'][0] ?></small>
                                                </h6>
                                                <h6 class="mt-1">
                                                    <small><?= $edu['lyf'][1] ?></small>
                                                </h6>
                                            </div>
                                        </div>
                                        <p><?= $edu['content'] ?></p>
                                        <small><?= $edu['title'] ?></small>
                                    </div>
                                </div>
                            </div>
                        <?php $i++; } ?>
                    </div>
                </div>
            </div>
            <div class="section-div">
                <div class="row">
                    <h4 class="text-center"><i class="fa fa-sliders" aria-hidden="true"></i> <?= $titles[$lang]['skills'] ?></h4>
                    <div class="section skills-card my-5">
                        <div class="row p-4">
                            <?php foreach ($skills as $name => $skill) { ?>
                                <div class="col-sm-12 col-md-<?= 12 / count($skills) ?>">
                                <h5><?= $skill[$lang]['title'] ?></h5>
                                <?php 
                                $skill_ = ($name == 'professional') ? $skill['content'] : $skill[$lang]['content'];
                                foreach ($skill_ as $lan => $value) { ?>
                                    <div class="skill">
                                        <div class="row">
                                            <div class="col-6 text-start my-1">
                                                <span><?= $lan ?></span>
                                            </div>
                                            <div class="col-6 text-end my-1 p-0 skill-percent"><?= $value ?></div>
                                            <div class="col-12 skillbar" style="width: <?= $value ?>;"></div>
                                        </div>
                                    </div>
                                <?php } ?>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

<script src="<?= $URL ?>assets/js/scripts.js"></script>