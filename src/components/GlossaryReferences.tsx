import {
  BookOpen,
  ExternalLink,
  FileText,
  GraduationCap,
  Code,
  Award
} from "lucide-react";

const GlossaryReferences = () => {
  const glossaryTerms = [
    { term: "Point Cloud", definition: "A set of 3D points representing the surface of an object, captured by the scanner." },
    { term: "Mesh", definition: "A 3D model made of vertices, edges, and faces that approximate the scanned surface." },
    { term: "Triangulation", definition: "The process of determining 3D coordinates by measuring angles from two known positions." },
    { term: "RMS Error", definition: "Root Mean Square error - a measure of accuracy comparing measured to true values." },
    { term: "Intrinsic Parameters", definition: "Camera-specific properties including focal length and principal point." },
    { term: "Extrinsic Parameters", definition: "Position and orientation of the camera relative to the world coordinate system." },
    { term: "Laser Plane", definition: "The 2D plane of light created by the laser line, used for triangulation." },
    { term: "Reprojection Error", definition: "The distance between a projected 3D point and its corresponding detected 2D point." },
    { term: "PLY (Polygon File Format)", definition: "A file format for storing 3D data including vertices, faces, and colors." },
    { term: "STL (Stereolithography)", definition: "A file format describing surface geometry without color or texture." },
    { term: "Voxel", definition: "A 3D pixel representing a value on a regular grid in 3D space." },
    { term: "NURBS", definition: "Non-Uniform Rational B-Splines - mathematical representations of 3D geometry." },
  ];

  const academicReferences = [
    {
      title: "A Flexible New Technique for Camera Calibration",
      authors: "Zhang, Z.",
      journal: "IEEE PAMI, 2000",
      doi: "10.1109/34.888718",
      relevance: "Camera calibration methodology",
    },
    {
      title: "Structured-light 3D surface imaging: a tutorial",
      authors: "Geng, J.",
      journal: "Advances in Optics and Photonics, 2011",
      doi: "10.1364/AOP.3.000128",
      relevance: "Laser scanning fundamentals",
    },
    {
      title: "Point Cloud Library (PCL)",
      authors: "Rusu, R.B. & Cousins, S.",
      journal: "ICRA, 2011",
      doi: "10.1109/ICRA.2011.5980567",
      relevance: "Point cloud processing",
    },
  ];

  const standards = [
    { name: "OpenCV", version: "4.8+", use: "Computer vision & camera calibration" },
    { name: "Open3D", version: "0.17+", use: "Point cloud & mesh processing" },
    { name: "ISO 10360-8", version: "2013", use: "CMM acceptance testing" },
    { name: "VDI/VDE 2634", version: "Part 3", use: "Optical 3D measuring systems" },
    { name: "ASTM E2544", version: "2020", use: "3D imaging system performance" },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Technical Reference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Glossary & <span className="gradient-text">References</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical terminology, academic citations, and industry standards
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Glossary */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Glossary of Terms</h3>
            </div>
            <div className="p-4 max-h-[500px] overflow-y-auto">
              <dl className="space-y-3">
                {glossaryTerms.map((item) => (
                  <div key={item.term} className="p-3 rounded-lg bg-secondary/20">
                    <dt className="font-mono text-primary font-medium">{item.term}</dt>
                    <dd className="text-sm text-muted-foreground mt-1">{item.definition}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Academic References */}
          <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-lg text-foreground">Academic References</h3>
            </div>
            <div className="p-4 space-y-4">
              {academicReferences.map((ref, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-1">{ref.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{ref.authors} — {ref.journal}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">{ref.relevance}</span>
                    <a 
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary flex items-center gap-1 hover:underline"
                    >
                      DOI <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standards */}
        <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
          <div className="bg-secondary/30 border-b border-border/50 px-6 py-4 flex items-center gap-3">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg text-foreground">Standards & Libraries</h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {standards.map((standard) => (
                <div key={standard.name} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-primary" />
                    <span className="font-mono text-foreground">{standard.name}</span>
                    <span className="text-xs text-muted-foreground">{standard.version}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{standard.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlossaryReferences;
