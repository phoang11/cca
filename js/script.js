 $(document).ready(function () {
            
            $('a.gallery1').colorbox({
                transition: "elastic",
                opacity:0.5,
                rel:'group1',
                preloading: true,
                escKey: true,
                current: "{current}/{total}",
                arrowKey: true,
                retinaImage: true,
                scalePhotos: true,
                maxWidth: "90%",
            });

            $('a.gallery2').colorbox({
                transition: "elastic",
                opacity:0.5,
                rel:'group2',
                preloading: true,
                escKey: true,
                current: "{current}/{total}",
                arrowKey: true,
                retinaImage: true,
                scalePhotos: true,
                maxWidth: "90%",
            });

            $('a.gallery3').colorbox({
                transition: "elastic",
                opacity:0.5,
                rel:'group3',
                preloading: true,
                escKey: true,
                current: "{current}/{total}",
                arrowKey: true,
                retinaImage: true,
                scalePhotos: true,
                maxWidth: "90%",
            });

            $('a.gallery4').colorbox({
                transition: "elastic",
                opacity:0.5,
                rel:'group4',
                preloading: true,
                escKey: true,
                current: "{current}/{total}",
                arrowKey: true,
                retinaImage: true,
                scalePhotos: true,
                maxWidth: "90%",
            });

        });