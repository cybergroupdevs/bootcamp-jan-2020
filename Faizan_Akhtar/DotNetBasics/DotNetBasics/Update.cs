using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace DotNetBasics
{
    public class Update
    {
        public static void DoUpdate()
        {
            Console.WriteLine("\n UPDATE Example:\n");
            SqlConnection updateCon = Connection.doConnection();
            try
            {
                updateCon.Open();
                StringBuilder sb = new StringBuilder();
                sb.Append("UPDATE [dbo].[webTechnology] SET FileName='CSharpFile' Where ID=7");
                String sql = sb.ToString();
                using (SqlCommand command = new SqlCommand(sql, updateCon))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine("{0} {1}", reader.GetString(0), reader.GetString(1));
                        }
                        Console.ReadLine();
                        updateCon.Close();
                    }
                }
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
            }


        }
    }
}
