import React from 'react';

const technologies = [
    { name: 'Android', icon: "https://utfs.io/f/Fp16c7Wd5HTuIdBzIZ2O2zBQAjd8Y4Z0wHNvoXePi3KVtrbf", link: "https://developer.android.com/" },
    { name: 'Checks', icon: "https://utfs.io/f/Fp16c7Wd5HTusJiIv0dJdzfQr92TG7tRpN6ghcq38MIOFAoH", link: "https://checks.google.com/" },
    { name: 'ARCore', icon: "https://utfs.io/f/Fp16c7Wd5HTuf9NB2NAQeRzHBuaD27MQGEVN5rytIsKc9Lv4", link: "https://developers.google.com/ar" },
    { name: 'Chrome', icon: "https://utfs.io/f/Fp16c7Wd5HTuCyf8YvIAnUYKLSuVH6qORB5b1xNz29Ifrtki", link: "https://www.google.com/chrome/" },
    { name: 'AI Studio', icon: "https://utfs.io/f/Fp16c7Wd5HTuxsrXRolb6SiBkcNzohOHY1WVpK80LTZsaI9y", link: "https://aistudio.google.com/" },
    { name: 'Firebase', icon: "https://utfs.io/f/Fp16c7Wd5HTucM2k8CHm9fpnRW5Z6FXolOdBgEhQGJYuPix1", link: "https://firebase.google.com/" },
    { name: 'Flutter', icon: "https://utfs.io/f/Fp16c7Wd5HTunCu1Ub8PCqwQ3W4RHhurjG6KmI5tO90oMgYi", link: "https://flutter.dev/" },
    { name: 'Google Cloud', icon: "https://utfs.io/f/Fp16c7Wd5HTupwQ80fas9k1Im48CKrA0NvJDhqgWuYyFtwZ7", link: "https://cloud.google.com/" },
    { name: 'Google Maps', icon: "https://utfs.io/f/Fp16c7Wd5HTuK8s7R1UbgMYLKGxorOfIt2vHj9N3ApUwl54C", link: "https://maps.google.com/" },
    { name: 'Google Pay', icon: "https://utfs.io/f/Fp16c7Wd5HTur22XRBKRzTufwGXeWq1NgjpMi2UoPv5YCyk4", link: "https://pay.google.com/" },
    { name: 'TensorFlow', icon: "https://utfs.io/f/Fp16c7Wd5HTurHlhsaKRzTufwGXeWq1NgjpMi2UoPv5YCyk4", link: "https://www.tensorflow.org/" },
    { name: 'Google Wallet', icon: "https://utfs.io/f/Fp16c7Wd5HTu7kfMyeGvrSVQz1U5m9AjPGusKdRe64hJaE23", link: "https://wallet.google.com/" }
];

const TechStack = () => {
    return (
        <div className="py-8">
            <h2 className="text-4xl font-primaryBold">Stay updated on the technologies you love</h2>
            <p className="text-gray-600 mt-2 mb-6 font-primaryRegular">
                This DevFest we are focusing on the technologies that are trending in the market and are in demand. Let's come together and learn about these technologies from industry-leading experts.
            </p>
            <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                    <a
                        key={index}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative text-4xl text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                        <div className="p-4 bg-white rounded-full border border-black hover:shadow-xl">
                            <img loading="lazy" src={tech.icon} className="object-contain m-auto object-center w-8 h-8" alt={tech.name} />
                        </div>
                        <span className="absolute w-max -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-gray-700 bg-white p-1 shadow-lg">
                            {tech.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
